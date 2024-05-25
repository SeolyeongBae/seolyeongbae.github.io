"use client";
import { useEffect, useState } from "react";
import useTypingWords from "../hooks/useTypingWords";

interface BRgameProps {
  number: number;
  setNumber: (number: number) => void;
}

function computeNumber(number: number) {
  if (number == 0) {
    return [1, 2];
  }
  const n = (number - 2) % 4;
  const numbers = [];
  for (let i = 1; i <= 4 - n; i++) {
    numbers.push(number + i);
  }

  return numbers;
}

function generatePeerClassName(number: number) {
  return `peer-hover/btn${number}:bg-slate-300`;
}

/** 컴퓨터 턴, 3초 뒤 넘어감 */
const ComputerTurn = ({ number, setNumber }: BRgameProps) => {
  useEffect(() => {
    function setComputerNumbers() {
      const numbers = computeNumber(number);
      setNumber(numbers[numbers.length - 1]);
    }

    const interval = setInterval(setComputerNumbers, 2000); //interval = setInterval의 ID
    return () => clearInterval(interval);
  }, []);

  const numbers = computeNumber(number).join(", ");
  const words = useTypingWords(`My turn! : ${numbers}`, 100);

  //TODO: 스킵 기능 구현, 버튼을 누르면 바로 유저턴으로 넘어가게

  return (
    <div>
      <p className="bg-slate-100 bg-opacity-100 dark:bg-opacity-20 py-2 px-4 animate-typing cursor-pointer h-10">
        {words || " "}
      </p>
    </div>
  );
};

const UserTurn = ({ number, setNumber }: BRgameProps) => {
  const numbers = [];
  const peerClassName = [
    "",
    `peer-hover/btn0:bg-slate-300`,
    `peer-hover/btn0:bg-slate-300 peer-hover/btn1:bg-slate-300`,
  ];

  if (number == 30) {
    numbers.push(31);
  } else {
    for (let i = 3; i >= 1; i--) {
      numbers.push(number + i);
    }
  }

  return (
    <div>
      <p className="bg-slate-100 bg-opacity-100 dark:bg-opacity-20 py-2 px-4">
        Your turn! Please start from {number}
      </p>

      <div className="mt-2 flex flex-row-reverse justify-end">
        {numbers.map((num, idx) => (
          <button
            className={`peer/btn${idx} ${peerClassName[idx]} bg-slate-700 bg-opacity-10 dark:bg-opacity-70 px-2 py-1 rounded-md mr-2 hover:bg-slate-300 transition-all`}
            key={num}
            onClick={() => setNumber(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function BRgame() {
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [number, setNumber] = useState(-1); // number = 0 ~ 31

  useEffect(() => {
    if (number <= 0) {
      return;
    }

    setIsUserTurn((prev) => !prev);
  }, [number]);

  const isGameOver = number == 31;
  const isGameStart = number >= 0;
  const isValidGame = number < 31 && isGameStart;

  return (
    <div>
      <p> Let&apos;s play the Baskin Robbins 31 game!</p>
      <p>The rules are simple: You can call out up to three numbers.</p>
      <p>
        The person who spells out the number 31 is the loser of this game. Good
        Luck!
      </p>

      <br />

      {!isGameStart && (
        <button
          onClick={() => setNumber(0)}
          className="opacity-70 hover:opacity-100 underline"
        >
          Let&apos;s get started! <b>(Click)</b>
        </button>
      )}

      {isGameOver && (
        <p className="bg-slate-100 bg-opacity-100 dark:bg-opacity-20 py-2 px-4  ">
          Hehe, I won the game! Have a nice day.
        </p>
      )}
      {isValidGame &&
        (isUserTurn ? (
          <UserTurn number={number} setNumber={setNumber} />
        ) : (
          <ComputerTurn number={number} setNumber={setNumber} />
        ))}
    </div>
  );
}
