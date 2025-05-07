export default function useIsKeyboardShown() {
    const [isShown, setIsShown] = useState(false);
    
    useEffect(() => {
       const keyboardDidShowSubscription = 
    Keyboard.addListener('keyboardDidShow', () => {
      setIsShown(true);
    });
    const keyboardDidHideSubscription = 
    Keyboard.addListener('keyboardDidHide', () => {
      setIsShown(false);
    });
    
    return () => {
      keyboardDidShowSubscription?.remove();
      keyboardDidHideSubscription?.remove();
    };
     }, []);
    
    return isShown;
    }