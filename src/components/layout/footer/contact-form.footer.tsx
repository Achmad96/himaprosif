'use client';

import { ChangeEvent, ChangeEventHandler, FormEvent, KeyboardEvent, useRef } from 'react';

export default function Contact() {
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <section className="flex h-[22rem] w-[33%] flex-col items-center gap-5 rounded-3xl bg-base-100 px-5 py-5 max-xl:h-[20rem] max-lg:w-[50%] max-sm:h-[20rem] max-sm:w-[90%]">
      <h2 className="text-center text-xl font-extrabold text-slate-100 max-xl:w-[95%] max-xl:text-lg max-sm:text-lg">Hubungi kami</h2>
      <div className="flex w-full flex-col gap-3 max-xl:w-[95%]">
        <label>
          Username
          <input type="text" placeholder="Your name" className="input input-bordered w-full bg-slate-100 text-base-100 max-xl:h-[38px]" />
        </label>
      </div>
      <div className="flex w-full flex-col gap-3 max-xl:w-[95%]">
        <label>
          Messages
          <textarea
            ref={ref}
            className="textarea textarea-bordered w-full resize-none bg-slate-100 text-base-100 max-xl:h-[42px]"
            placeholder="Messages"
            rows={1}
            maxLength={100}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              if (e.target.value.length > 100) {
                // toast.error('Notes must be less or equal than 100 characters.', defaultToastConfig);
                return;
              }
              // dispatch({
              //   type: "orderFormData",
              //   payload: { notes: e.target.value },
              // });
            }}
            onInput={(e: FormEvent<HTMLTextAreaElement>) => {
              if (!ref.current || e.currentTarget.scrollHeight >= 120) return;
              ref.current.style.height = 'auto';
              ref.current.style.height = `${e.currentTarget.scrollHeight}px`;
            }}
            onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
              if (ref.current && e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          />
        </label>
      </div>
      <button className="h-10 w-full rounded-md bg-secondary text-base hover:opacity-75">Kirim</button>
    </section>
  );
}
