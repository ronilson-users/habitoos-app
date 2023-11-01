import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export function Button(){
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
 
    >
      <MaterialIcons
        name="add-a-photo"
        color="#FFF"
        size={24}
      />
    </TouchableOpacity>
  );
}