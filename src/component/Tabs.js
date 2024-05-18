const Tabs = ({ children, defaultActiveKey, onChange }) => {
  const keys = children.map((obj) => obj.props.tab);
  const renderElement = children.filter((obj) => obj.key === defaultActiveKey);
  return (
    <>
      {keys.map((key) => (
        <span key={key} onClick={onChange} style={{ cursor: "pointer" }}>
          {" "}
          {key}{" "}
        </span>
      ))}
      {renderElement}
    </>
  );
};

export default Tabs;
