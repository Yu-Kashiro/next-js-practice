export default function Header( {title}: {title: string} ) {
  return <h1>{title ? title : "Default title"}</h1>;
}
