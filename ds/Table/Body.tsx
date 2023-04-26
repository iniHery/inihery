type Props = {
  children: React.ReactNode;
};

const Body = (props: Props) => {
  return <tbody>{props.children}</tbody>;
};

export default Body;
