'use strict'

export default {
    name: 'search-box',
    template: `
        <div class="search-box"> 
    <input type="text" placeholder="Search" v-model="filterBy.txt" @input="emitFilter">
    </div>
    </div>
    `,
    data() {
        return {
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        emitFilter(){
            this.$emit('set-filter', this.filterBy.txt);
            // console.log(this.filterBy.txt);
            // return this.filterBy.txt
            
    },
}
    
}