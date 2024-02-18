import { EmptyList, EmptyListProps } from "../List/EmptyList";

interface BodyProps extends EmptyListProps {
  children?: React.ReactElement;
  data?: any[];
}

export function Body({children, data, ...props}: Readonly<BodyProps>) {
  if (data) {
    return children;
  }
  return <EmptyList {...props} />;
}
