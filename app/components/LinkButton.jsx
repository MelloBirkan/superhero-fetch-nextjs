import Link from "next/link";

const LinkButton = ({ href, children, modifier }) => <Link
  href={href}
  className={`${modifier} block w-fit rounded-md bg-slate-700 px-3.5 py-2.5 text-sm font-semibold text-slate-100 shadow-sm hover:bg-slate-600`}
>{children}
</Link>

export default LinkButton;