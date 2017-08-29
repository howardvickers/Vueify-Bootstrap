$(document).ready(function(){

    // Note how the component takes in two parameters: the name (as a string) of the component and an object with the options (in this case the template and the props)
    Vue.component('my-modal', {
        // Note how the data-target in line #10 matches the ID of the modal in line #14
        // Notice the use of v-html tags in lines #19 and #21 that are necessary if the data in the vm is html (and not just text)    

        template: 
            `<div class="container">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#howardModal">
                Launch Howard Modal
                </button>
                <!-- Modal -->
                <div class="modal fade" id="howardModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel" v-html="proptitle"></h4>
                    </div>
                    <div class="modal-body" v-html="propcontent"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>`,
            // Each instance of a component gets it's own isolated scope (it doesn't have access to its parent's data), so props allows data to pass from parent to child.  The props are defined within the component; note how they are strings in an array.
            // Here we define props as an array of strings mapping to fields that the child component expects to receive from its parent. See the index.html page for the use of v-bind to bind the props to the data keys in the app (in JS file)
            props: ['proptitle', 'propcontent'],
    })

    var mainVm = new Vue({
        el: '#app',
        data: {
            vm: {
                    // The content is in html so v-html is necessary in the template (see line #17)
                    modalTitle: `<p>A Title for Modal</p>`,
                    modalContent: `<p>A whole load of content for the modal.</p>`
            }
        },
    })
})