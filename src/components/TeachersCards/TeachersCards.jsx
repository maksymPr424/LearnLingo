import TeacherCard from "../TeacherCard/TeacherCard";

export default function TeachersCards({ visibleCards }) {
  return (
    <ul>
      {visibleCards.map((item, index) => (
        <li key={index}>
          <TeacherCard teacher={{ ...item }} />
        </li>
      ))}
    </ul>
  );
}
