interface IColorBox {
  id: string;
  title: string;
  color: string;
  onClick: () => void;
}

const ColorBox = (props: IColorBox) => {
  const { color, id, title, onClick } = props;
  return (
    <span
      id={id}
      className='color'
      title={title}
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    />
  );
};

export default ColorBox;
