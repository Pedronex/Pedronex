interface Props {
  name: string;
  yearOfExperience: number;
  icon?: React.ReactElement;
  detail?: string;
}

export function Technology({ icon, name, yearOfExperience, detail }: Props) {
  return (
    <details className="rounded-lg border-purple-500 cursor-pointer w-full">
      <summary className="list-none flex flex-col justify-center items-center">
        {icon}
        <p>{name}</p>
      </summary>
      <p className="text-center mt-2 border-t">
        Experiência: {new Date().getFullYear() - yearOfExperience} anos
      </p>
      {detail && <p className="mt-2 border-t">{detail}</p>}
    </details>
  );
}
