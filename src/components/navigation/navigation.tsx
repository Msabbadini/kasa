import { Container } from "@/layouts/generic/container/container";
import { Typography } from "@/components/typography/typography";
import { ActiveLink } from "@/components/navigation/active_link";
import useWindowDimension from "@/utils/useWindowDimension";
import { NavLink } from "react-router-dom";
const logoNavigation =  `${process.env.PUBLIC_URL}/assets/logo-navigation.png`;
export const Navigation = () => {
    const {width} = useWindowDimension()
return(
    <div>
        <Container>
           <header>
              <NavLink to={`${process.env.REACT_APP_URL}/home`}>
                  <img src={logoNavigation} alt={'Logo Kasa'}/>
              </NavLink>
               {/* {process.env.NODE_ENV ? "dev" : "prod"} */}
               <div >
                   <Typography
                       variant={width > 769 ?"lead":"body-xs"}
                       component="div"
                       className="menu"
                       align={'right'}
                   >
                       <ActiveLink href="/home" nameRoute={"Accueil"}/>
                       <ActiveLink href="/about" nameRoute={"A propos"}/>
                   </Typography>
               </div>
           </header>
        </Container>
    </div>
)
}
