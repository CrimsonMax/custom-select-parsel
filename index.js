import { Select } from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Choose Your Destiny',
    selectedId: null,
    data: [
        {id: '1', value: 'Very Easy'},
        {id: '2', value: 'Easy'},
        {id: '3', value: 'Normal'},
        {id: '4', value: 'Hard'},
        {id: '5', value: 'Very Hard'},
        {id: '6', value: 'Ultra Violence'}
    ],
    onSelect(item) {
        console.log('Your level is: ', item)
    }
})

