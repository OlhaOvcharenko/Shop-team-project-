import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLayout, setLayout } from '../../../redux/layoutRedux';

const LAYOUT_BREAKPOINTS = {
  MOBILE: 576,
  TABLET: 992,
  DESKTOP: 1200,
};

function useLayoutListener() {
  const currentLayout = useSelector(getLayout);
  const dispatch = useDispatch();

  const setCurrentLayout = width => {
    let layout = Object.keys(LAYOUT_BREAKPOINTS)[0];
    for (const device in LAYOUT_BREAKPOINTS) {
      if (width > LAYOUT_BREAKPOINTS[device]) {
        layout = device;
      }
    }
    dispatch(setLayout(layout));
  };

  useEffect(() => {
    setCurrentLayout(window.innerWidth);
    window.onresize = () => setCurrentLayout(window.innerWidth);
  }, [setCurrentLayout]);

  return currentLayout;
}

export default useLayoutListener;
