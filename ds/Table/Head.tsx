type Props = {
  children: React.ReactNode;
};

const Head = (props: Props) => {
  return <thead>{props.children}</thead>;
};

export default Head;
