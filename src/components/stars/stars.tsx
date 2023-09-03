import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StarsProps {
  rate: number;
  color?: string;
}

export default function Stars(props: StarsProps) {
  return (
    <>
      {Array(props.rate)
        .fill(0)
        .map((_: number, index: number) => {
          return (
            <FontAwesomeIcon
              key={index}
              icon={["fas", "star"]}
              size={"xl"}
              color={props.color ? props.color : "#FFD700"}
            />
          );
        })}
    </>
  );
}
