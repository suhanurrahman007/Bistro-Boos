import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../Share/MenuItem/MenuItem";

const Menu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const filterMenu = data.filter(
              (item) => item.category === "popular"
            )
            setMenu(filterMenu)
        })
    },[])

    
    return (
      <section>
        <div>
          <SectionTitle
            header={"Check it out"}
            miniHeader={"FROM OUR MENU"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-0">
          {menu.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
        </div>
      </section>
    );
};

export default Menu;