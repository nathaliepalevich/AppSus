'use strict'
import noteService from '../note.service.js';
import eventBus, {FILTER_NOTES} from '../../global/event-bus.js';

export default {
    name: 'note-filter',
    template: `
    <input type="text" placeholder="I filter notes!" v-model="filterBy.txt" @keyup="emitFilter">  
    `,
    data() {
        return {
            filterBy: {
                txt: '',
            },
            testBus: 'Testing the bus'
        }
    },
    methods: {
        emitFilter() {
            eventBus.$emit(FILTER_NOTES, this.filterBy);
            console.log('beep beep the bus is starting to move!')
        }
    }
}