import type { ReactNode } from "react";

export default function PhoneFrame({
  children,
  className = "",
  frameClassName = "",
}: {
  children: ReactNode;
  className?: string;
  frameClassName?: string;
}) {
  return (
    <div
      className={`relative mx-auto h-[820px] w-[380px] rounded-[3rem] border-[10px] border-black bg-black shadow-2xl ${frameClassName}`}
    >
      <div
        className={`relative flex h-full w-full flex-col overflow-hidden rounded-[2.25rem] ${className}`}
      >
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold">
          <span>9:41</span>
          <div className="h-6 w-32 rounded-full bg-black/90 absolute left-1/2 top-1 -translate-x-1/2" />
          <span className="flex items-center gap-1">
            <span aria-hidden>📶</span>
            <span aria-hidden>📡</span>
            <span aria-hidden>🔋</span>
          </span>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
