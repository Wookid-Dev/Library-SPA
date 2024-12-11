interface ItemCardProps {
  name: string;
  description: string;
  date?: string;
  onClick: () => void;
}

const ItemCard = ({ name, description, date, onClick }: ItemCardProps) => {
  return (
    <div
      onClick={onClick}
      className="p-4 border rounded-md shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-500 mt-1">{description}</div>
      {date && <div className="text-xs text-gray-400 mt-2">{date}</div>}
    </div>
  );
};

export default ItemCard;
