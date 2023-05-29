enum CtaTypes {
    "primary"="primary",
    "secondary"="secondary",
}

type CtaProps = {
  name: string;
  link: string;
  type: CtaTypes;
};
export default function Cta(props: CtaProps) {
  if (props.type === CtaTypes.primary) {
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
