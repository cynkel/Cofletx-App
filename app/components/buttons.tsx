export function Button({ text, paddings }: { text: string, paddings: string }) {
  return (
    <button className={`bg-yellow border border-black ${paddings} rounded-md`}>
      {text}
    </button>
  );
}

export function Acc_Button({ text, paddings }: { text: string, paddings: string }) {
  return (
    <button className={`bg-transparent border border-black ${paddings} rounded-md`}>
      {text}
    </button>
  );
}
