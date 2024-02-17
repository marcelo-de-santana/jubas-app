import {EmptyList, EmptyListProps} from '../List';

interface BodyProps extends EmptyListProps {
  children?: React.ReactElement;
  data?: any[];
}

export function Body({children, data, ...props}: BodyProps) {
  if (data) {
    return children;
  }
  return <EmptyList {...props} />;
}
