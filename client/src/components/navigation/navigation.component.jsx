import { Outlet } from 'react-router'
import { useContext, useState } from 'react'

import { UserContext } from '../../contexts/user.context'
import NavigationIcon from './navigation-icon.component'

import { NavigationHeadBar, NavigationBarContent, ProfilePicture, MainContentWrapper, OutletWrapper, NavSlider, ShrinkButton, IconsWrapper } from './navigation.styles'

const Navigation = () => {
  const { user } = useContext(UserContext);
  const [ sliderOpen, setSliderOpen ] = useState(false);

  const SliderChoices = [
    {
      name: 'Home',
      url: 'https://i.imgur.com/QdV4UHT.png',
      link: '/app'
    },
    {
      name: 'Your Listings',
      url: 'https://i.imgur.com/QdV4UHT.png',
      link: '/app/your-listings'
    },
    {
      name: 'Listings',
      url: 'https://i.imgur.com/QdV4UHT.png',
      link: '/app/listings'
    },
    {
      name: 'Story Board',
      url: 'https://i.imgur.com/QdV4UHT.png',
      link: '/app/story-board'
    }
  ]

  const clickHandler = () => {
    setSliderOpen(!sliderOpen);
  }

  return (
    <>
        <NavigationHeadBar>
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