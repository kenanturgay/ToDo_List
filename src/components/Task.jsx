import React from 'react';
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import { tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
  // Deadline ile ilgili hesaplamalar
  const daysLeft = differenceInDays(new Date(taskObj.deadline), new Date());
  const isUrgent = daysLeft < 3;
  const deadlineText = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr, // Türkçe dil desteği
  });

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{' '}
        <span
          className={`px-2 py-1 rounded-sm ${
            isUrgent ? 'bg-urgent' : 'bg-normal'
          } inline-block`}
        >
          {deadlineText}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-1.5 text-sm border-2 border-solid border-[#ccc] mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          onClick={() => onComplete(taskObj.id)}
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)] rounded-sm text-sm border-0 cursor-pointer"
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
}

export default Task;