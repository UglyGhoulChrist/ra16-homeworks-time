import React from "react";

function DateTimePretty(Component) {
  function hocComponent(props) {
    // Получаем разницу по времени между сейчас и датой контента в милисекундах
    const deltaTime = new Date() - new Date(props.date);
    // Разница в минутах
    const deltaMinute = ~~(deltaTime / 6e4);
    // Разница в часах
    const deltaHour = ~~(deltaMinute / 60);
    // Разница в днях
    const deltaDay = ~~(deltaHour / 24);
    // Разница в годах
    const deltaYear = ~~(deltaDay / 365);

    const text =
      (deltaYear && `${deltaYear} лет назад`) ||
      (deltaDay && `${deltaDay} дней назад`) ||
      (deltaHour && `${deltaHour} часов назад`) ||
      (deltaMinute && `${deltaMinute} минут назад`) ||
      "меньше минуты";

    return <Component {...props} date={text} />;
  }

  return hocComponent;
}

export default DateTimePretty;
