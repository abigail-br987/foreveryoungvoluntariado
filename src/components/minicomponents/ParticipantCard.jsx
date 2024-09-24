const PersonCard = ({ name, title, description, imageSrc }) => {
    return (
      <div className="flex items-center border-2 border-black rounded-lg bg-white">
        <div>
          <img src={imageSrc} alt={name} className="w-full h-full max-w-40 object-cover border-black border-r-2 rounded-sm" />
        </div>
        <div className="mx-6">
          <h2 >{title} - {name}</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default PersonCard;
  