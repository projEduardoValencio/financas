const moneyFormat = (value: number) : string => {
  const stringBuilder : string[] = [];
  if(value < 0){
    stringBuilder.push("- ");
  }
  stringBuilder.push(...value.toFixed(2).split("."))
  stringBuilder[stringBuilder.length - 1] = "," + stringBuilder[stringBuilder.length - 1];
  stringBuilder[stringBuilder.length - 2] = stringBuilder[stringBuilder.length - 2].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return stringBuilder.join("");
}

export default moneyFormat;