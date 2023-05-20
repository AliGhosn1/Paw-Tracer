import { Outlet, useNavigate } from 'react-router';
import { useContext, useState } from 'react';

import { UserContext } from '../../contexts/user.context';
import NavigationIcon from './navigation-icon.component';
import { NavigationHeadBar, NavigationBarContent, ProfilePicture, MainContentWrapper, OutletWrapper, NavSlider, ShrinkButton, IconsWrapper, 
  LogoutContainer, LogoutWrapper } from './navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import homeIcon from '../../assets/home.png';
import storyIcon from '../../assets/news-board.png';
import listingIcon from '../../assets/listings.png';
import profileIcon from '../../assets/profile.png';
import logoutIcon from '../../assets/logout.png';

import { PawTracer } from '../general.styles';

const Navigation = () => {
  const { user } = useContext(UserContext);
  const [ sliderOpen, setSliderOpen ] = useState(false);
  const navigate = useNavigate();

  const SliderChoices = [
    {
      name: 'Home',
      url: homeIcon,
      link: '/app'
    },
    {
      name: 'Story',
      url: storyIcon,
      link: '/app/story-board'
    },
    {
      name: 'Listings',
      url: listingIcon,
      link: '/app/listings'
    },
    {
      name: 'Profile',
      url: profileIcon,
      link: '/app/profile'
    }
  ]

  const clickHandler = () => {
    setSliderOpen(!sliderOpen);
  }

  const onSignOutClick = () =>{
    navigate('/');
    signOutUser();
  }

  return (
    <>
        <NavigationHeadBar>
          <PawTracer width='80px' height='80px' style={{marginLeft: '20px'}}/>
          <NavigationBarContent>
            <h2>{ user.displayName }</h2>
            <ProfilePicture src={user.photoURL} alt='User Photo'/>
          </NavigationBarContent>
        </NavigationHeadBar>
        <MainContentWrapper>
          <NavSlider width={sliderOpen ? '8vw' : '3vw'}>
            <IconsWrapper>
            {
              SliderChoices.map((item) => (
                <NavigationIcon item={item} open={sliderOpen}/>
              ))
            }
            <LogoutContainer onClick={onSignOutClick}>
              <LogoutWrapper open={sliderOpen}>
                <img src={logoutIcon} />
                <h3>Logout</h3>
              </LogoutWrapper>
            </LogoutContainer>
            </IconsWrapper>
            <ShrinkButton onClick={clickHandler} arrowRotate={sliderOpen ? '-180deg' : '0'}> <img src={'https://i.imgur.com/QdV4UHT.png'} /></ShrinkButton>
          </NavSlider>
          <OutletWrapper marginLeft={sliderOpen ? '8vw' : '3vw'} width={sliderOpen ? '92vw' : '97vw'}>
            <Outlet />
          </OutletWrapper>
        </MainContentWrapper>
    </>
  )
}

export default Navigation