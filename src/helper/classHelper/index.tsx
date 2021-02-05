export default function(listOfStyles : Array<string | null | false>) {
  return listOfStyles.filter(one => one).join(' ');
}