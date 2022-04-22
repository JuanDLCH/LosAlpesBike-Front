import fondo from '../assets/fondoCicla.png';
import { useAuth } from '../auth/useAuth'
import { Hero } from '../components/Admin/Hero/Hero'

export const LandingPage = () => {
    return (
      <div>
        <Hero imageSrc={fondo} title={'Los Alpes Bike'}/>
        <h1 style={{marginTop: '10%'}}>Landing Page</h1>
      </div>
    )
  }