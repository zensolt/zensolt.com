"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Icon from "@/components/ui/Icon";
import { SITE_CONTACT } from "@/lib/data";
import {
  SUPPORT_CHAT_FLOW,
  SUPPORT_CHAT_START,
  type SupportChatAction,
  type SupportChatOption,
} from "@/lib/support-chat-flow";

type ChatLine = { id: string; role: "bot" | "user"; text: string };

const TYPING_MS = 900;
const TYPING_MS_REDUCED = 120;

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function runAction(action: SupportChatAction | undefined): void {
  if (!action || action === "close") return;
  if (action === "copy_email") {
    const email = SITE_CONTACT.email;
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(email);
    }
    return;
  }
  let targetId: string | null = null;
  switch (action) {
    case "scroll_contact":
      targetId = "contact";
      break;
    case "scroll_cases":
      targetId = "cases";
      break;
    case "scroll_process":
      targetId = "process";
      break;
    case "scroll_services":
      targetId = "services";
      break;
    case "scroll_about":
      targetId = "about";
      break;
    case "scroll_tech":
      targetId = "tech";
      break;
    case "scroll_ai":
      targetId = "ai";
      break;
    case "scroll_industries":
      targetId = "industries";
      break;
    case "scroll_web":
      targetId = "web";
      break;
    case "scroll_mobile":
      targetId = "mobile";
      break;
    case "scroll_cloud":
      targetId = "cloud";
      break;
    default:
      break;
  }
  if (targetId) {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function SupportChat() {
  const titleId = useId();
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const typingDelay = reduced ? TYPING_MS_REDUCED : TYPING_MS;
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<ChatLine[]>([]);
  const [options, setOptions] = useState<SupportChatOption[]>([]);
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLButtonElement>(null);
  const lineIdRef = useRef(0);

  const nextLineId = useCallback(
    (prefix: string) => `${prefix}-${++lineIdRef.current}`,
    []
  );

  const appendBot = useCallback(
    (nodeId: string) => {
      const node = SUPPORT_CHAT_FLOW[nodeId];
      if (!node) return;
      const id = nextLineId("b");
      setLines((prev) => [...prev, { id, role: "bot", text: node.message }]);
      setOptions(node.options);
    },
    [nextLineId]
  );

  const handleOpen = useCallback(() => {
    lineIdRef.current = 0;
    setOpen(true);
    setLines([]);
    setOptions([]);
    setTyping(true);
    setBusy(true);
    window.setTimeout(() => {
      setTyping(false);
      appendBot(SUPPORT_CHAT_START);
      setBusy(false);
    }, typingDelay);
  }, [appendBot, typingDelay]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setLines([]);
    setOptions([]);
    setTyping(false);
    setBusy(false);
    launchRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleClose]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      listRef.current?.lastElementChild?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 50);
    return () => window.clearTimeout(t);
  }, [lines, typing, options, open]);

  const onChoose = (opt: SupportChatOption) => {
    if (busy) return;
    if (opt.action === "close") {
      handleClose();
      return;
    }
    const uid = nextLineId("u");
    setLines((prev) => [...prev, { id: uid, role: "user", text: opt.label }]);
    setOptions([]);
    runAction(opt.action);
    const next = opt.next;
    if (!next) {
      setBusy(false);
      return;
    }
    setBusy(true);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      appendBot(next);
      setBusy(false);
    }, typingDelay);
  };

  return (
    <>
      <button
        ref={launchRef}
        type="button"
        className="support-fab"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        onClick={() => (open ? handleClose() : handleOpen())}
        aria-label={open ? "Close support chat" : "Open support chat"}
      >
        {open ? (
          <Icon name="close" size={22} />
        ) : (
          <Icon name="support" size={22} />
        )}
      </button>

      {open ? (
        <div
          className="support-panel-wrap"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={handleClose}
        >
          <div className="support-panel" onClick={(e) => e.stopPropagation()}>
            <div className="support-panel-head">
              <div className="support-panel-title-row">
                <span className="support-avatar" aria-hidden>
                  <Icon name="support" size={18} />
                </span>
                <div>
                  <div id={titleId} className="support-panel-title">
                    Zensolt Consultants Support
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="support-panel-close"
                onClick={handleClose}
                aria-label="Close support chat"
              >
                <Icon name="close" size={16} />
              </button>
            </div>

            <div
              className="support-messages"
              ref={listRef}
              aria-live="polite"
              aria-relevant="additions"
            >
              {lines.map((line, index) => {
                const isLast = index === lines.length - 1;
                const optsWithThisBot =
                  line.role === "bot" &&
                  isLast &&
                  !typing &&
                  options.length > 0;

                if (line.role === "bot") {
                  return (
                    <div
                      key={line.id}
                      className="support-turn support-turn-bot"
                    >
                      <span
                        className="support-msg-avatar support-msg-avatar-bot"
                        aria-hidden
                      >
                        <Icon name="bot" size={16} />
                      </span>
                      <div className="support-turn-col">
                        <div className="support-bubble support-bubble-bot">
                          {line.text.split("\n").map((p, i) => (
                            <p key={i} className="support-bubble-p">
                              {p}
                            </p>
                          ))}
                        </div>
                        {optsWithThisBot ? (
                          <div
                            className="support-opts-row"
                            role="group"
                            aria-label="Choose a reply"
                          >
                            {options.map((opt, i) => (
                              <button
                                key={`${opt.label}-${i}`}
                                type="button"
                                className="support-opt"
                                disabled={busy}
                                onClick={() => onChoose(opt)}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={line.id} className="support-turn support-turn-user">
                    <span
                      className="support-msg-avatar support-msg-avatar-user"
                      aria-hidden
                    >
                      <Icon name="user" size={16} />
                    </span>
                    <div className="support-bubble support-bubble-user">
                      {line.text.split("\n").map((p, i) => (
                        <p key={i} className="support-bubble-p">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
              {typing ? (
                <div className="support-turn support-turn-bot">
                  <span
                    className="support-msg-avatar support-msg-avatar-bot"
                    aria-hidden
                  >
                    <Icon name="bot" size={16} />
                  </span>
                  <div className="support-turn-col">
                    <div
                      className="support-bubble support-bubble-bot support-typing-wrap"
                      aria-label="Assistant is typing"
                    >
                      <span className="support-typing">
                        <span className="support-typing-dot" />
                        <span className="support-typing-dot" />
                        <span className="support-typing-dot" />
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
