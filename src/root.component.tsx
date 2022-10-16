import { ApplicationCustomProps } from "@jw-project/api";
import { useEffect, useState } from "react";

export default function Root(props: ApplicationCustomProps) {
  const { themeObservable, titleObservable } = props;
  const [theme, setTheme] = useState("");

  useEffect(() => {
    themeObservable.subscribe(setTheme);
  }, []);

  const click = () => {
    titleObservable.next("titulo home");
  };

  console.log(props);
  return (
    <section>
      {props.name} is mounteds!sss... theme is {theme}
      <button onClick={click}>mudar titulo</button>
    </section>
  );
}
