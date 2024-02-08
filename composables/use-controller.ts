import type { Ref } from 'vue'

export const useController = () => {
    const controller_obj = {
        ff:'',
        header:'',
        footer:'',
        section:[''],
        url:''
    }
    const controller_content:Ref<{ff:string,header:string,footer:string,section:string[],url:string}> = useState('controller_url', () => controller_obj);

    const updateController = (controller_content:Ref<{ff:string,header:string,footer:string,section:string[],url:string}>) => (content:{ff:string,header:string,footer:string,section:string[],url:string}) => {
        controller_content.value.ff = content.ff;
        controller_content.value.header = content.header;
        controller_content.value.footer = content.footer;
        controller_content.value.section = content.section;
    }
    return {
        controller_content: readonly(controller_content),
        updateController: updateController(controller_content)
    }
}