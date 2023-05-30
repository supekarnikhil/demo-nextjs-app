enum CtaTypes {
    "primary"="primary",
    "secondary"="secondary",
}

enum CtaModes {
  "light"="light",
  "dark"="dark",
}

type CtaProps = {
  name: string;
  link: string;
  type: CtaTypes;
  mode: CtaModes;
};

export default function Cta(props: CtaProps) {

  if (props.mode === CtaModes.dark && props.type === CtaTypes.primary) {
    return (
      <a
        href={props.link}
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {props.name}
      </a>
    );
  }
  else if (props.mode === CtaModes.dark && props.type === CtaTypes.secondary) {
    return(
      <a
        href={props.link}
        className="text-sm font-semibold leading-6 text-white"
      >
        {props.name} <span aria-hidden="true">→</span>
      </a>
    );
  }
  else if (props.type === CtaTypes.primary) {
    return (
      <a
        href={props.link}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.name}
      </a>
    );
  }

    return (
      <a
        href={props.link}
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        {props.name} <span aria-hidden="true">→</span>
      </a>
    );
}
