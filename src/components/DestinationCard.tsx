type DestinationCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function DestinationCard({
  image,
  title,
  description,
}: DestinationCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}