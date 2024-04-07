import { ref } from 'vue';

const useVisible = () => {
 const dialogVisible = ref(true);

 const makeVisible = () => {
    dialogVisible.value = true;
 }

 return {dialogVisible, makeVisible}
}

export default useVisible