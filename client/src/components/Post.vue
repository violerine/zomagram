<template>
          <div class="card">
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <div>
                                    <iframe src="" 
                                    width="73" 
                                    height="28" 
                                    style="border:none;overflow:hidden" 
                                    scrolling="no" 
                                    frameborder="0" 
                                    allowTransparency="true" 
                                    allow="encrypted-media"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br>
                        <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns is-mobile">
                        <div class="column is-11">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="text" placeholder="Add a comment . . .">
                                </div>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <button class="button">
                                <i class="material-icons">more_horiz</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             
</template>

<script>

export default {
    
    data:{
        url: ''
    },
    created: {
        shareFB(){
            let uri = 'https://www.zomato.com/jakarta'
            let encode = encodeURIComponent(uri)
            console.log(encode);
            let shareLink = `https://www.facebook.com/plugins/share_button.php?href=${encode}&layout=button&size=large&mobile_iframe=true&appId=239483590150835&width=73&height=28`
            this.url = shareLink
        }
    },
    // methods: {
    //     shareFB(uri) {
    //         // return !window.open(link,'Facebook', 'width=640px,height=580px')
    //         let encode = encodeURIComponent(uri)
    //         console.log(encode);
    //         let shareLink = `https://www.facebook.com/plugins/share_button.php?href=${encode}&layout=button&size=large&mobile_iframe=true&appId=239483590150835&width=73&height=28`
    //     }
    // }
}
</script>


<style scoped>
.card {
    margin-top: 5rem;
}
.card .header {
    padding: 5px 10px;
}
.card-footer .columns {
    width: 100%;
}
.card-footer .columns input {
    border: none;
    border-radius: 0;
    box-shadow: none;
}
.card-footer .columns .column:last-child {
    display: flex;
    align-items: center;
}
.card-footer .columns .column:last-child button {
    border: none;
}
</style>
