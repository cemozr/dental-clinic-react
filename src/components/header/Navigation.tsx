import Button from "../UI/Button";

export default function Navigation() {
  const menus: { name: string; to: string }[] = [
    { name: "Ana Sayfa", to: "/" },
    { name: "Hizmetler", to: "/services" },
    { name: "Hakkında", to: "/about" },
    { name: "İletişim", to: "/contact" },
  ];
  return (
    <>
      {menus.map((menu, i) => {
        return (
          <li key={i}>
            <Button el="link" to={menu.to}>
              {menu.name}
            </Button>
          </li>
        );
      })}
      <li className="lg:hidden">
        <Button el="colored-link" to="/appointment">
          Randevu Al
        </Button>
      </li>
    </>
  );
}
