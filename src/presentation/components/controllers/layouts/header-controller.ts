import { defineComponent,ref } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars, faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import NavItemView from '../../views/dropdowns/nav-item-view.vue'
import XboxNavView from '../../views/panels/xbox-nav-view.vue'
import MenuNavView from '../../views/panels/menu-nav-view.vue'
import {dynamicNavItemsKeys} from '../../../../data/store/header-store'
import { HeaderService } from "../../../../services/header.service";


type UpdateNavItemParams = {
    key: string | number,
    label: string,
    children: any[],
    currentWidth: number,
    widthValueToChange: number
}

export const HeaderController = defineComponent({
    name:'Header',
    components:{
        NavItemView,
        XboxNavView,
        MenuNavView,
        FontAwesomeIcon,
    },
    setup(){
        return {
            gamePassOptions: ref([]),
            gamesOptions: ref([]),
            devicesOptions: ref([]),
            storeOptions: ref([]),
            communityOptions: ref([]),
            moreOptions: ref([]),
            menuNavOptions: ref([]),
            microsoftDB: ref([])
        }
    },
    data() {
        return {
            dimensionX: document.documentElement.clientWidth,
            faMagnifyingGlass,
            faCartShopping,
            faBars,
            faArrowLeft,
            faXmark,
            dynamicNavItemsKeys,
            isShowInputSearch: false,
            isShowMenuMobile: false,
        }
    },
    methods: {
        showInputSearch() {
            this.isShowInputSearch = true
        },
        hideInputSearch() {
            this.isShowInputSearch = false
        },
        toggleMenuMobile(){
            this.isShowMenuMobile = !this.isShowMenuMobile
        },
        onUpdateNavItemMore({
            key,
            label,
            children,
            currentWidth,
            widthValueToChange
        }: UpdateNavItemParams) {
            ///@ts-ignore
            if (currentWidth < widthValueToChange && this.moreOptions.filter(item => item.key == key).length == 0)
                this.moreOptions.push({ key, label, children });
            if (currentWidth >= widthValueToChange)
                this.moreOptions = this.moreOptions.filter(item => item.key != key);
        },
        onResize(resize: number): void {
            this.onUpdateNavItemMore({
                key: this.dynamicNavItemsKeys.community,
                label: 'Comunidade',
                widthValueToChange: 1260,
                currentWidth: resize,
                children: this.communityOptions
            })

            this.onUpdateNavItemMore({
                key: this.dynamicNavItemsKeys.store,
                label: 'Loja',
                widthValueToChange: 1200,
                currentWidth: resize,
                children: this.storeOptions
            })

            this.onUpdateNavItemMore({
                key: this.dynamicNavItemsKeys.player,
                label: 'Jogar',
                widthValueToChange: 1220,
                currentWidth: resize,
                children: []
            })

            this.onUpdateNavItemMore({
                key: this.dynamicNavItemsKeys.devices,
                label: 'Dispositivos',
                widthValueToChange: 1020,
                currentWidth: resize,
                children: this.devicesOptions
            })

            this.onUpdateNavItemMore({
                key: this.dynamicNavItemsKeys.games,
                label: 'Jogos',
                widthValueToChange: 925,
                currentWidth: resize,
                children: this.gamesOptions
            })

            this.onUpdateNavItemMore({
                key: this.dynamicNavItemsKeys.gamePass,
                label: 'Game Pass',
                widthValueToChange: 850,
                currentWidth: resize,
                children: this.gamePassOptions
            })
            
            this.dimensionX = resize
        },
        getCurrentWidthScreen(): number {
            return document.documentElement.clientWidth
        }
    },
    mounted() {
        addEventListener('resize', () => this.onResize(this.getCurrentWidthScreen()))
        HeaderService.getGamePassContent().then(response => this.gamePassOptions = response)
        HeaderService.getGamesContent().then(response => this.gamesOptions = response)
        HeaderService.getDevicesContent().then(response => this.devicesOptions = response)
        HeaderService.getStoreContent().then(response => this.storeOptions = response)
        HeaderService.getCommunityContent().then(response => this.communityOptions = response)
        HeaderService.getMoreContent().then(response => this.moreOptions = response)
        HeaderService.getMenuNavContent().then(response => this.menuNavOptions = response)
        HeaderService.getMicrosoftContent().then(response => this.microsoftDB = response)
    },
    unmounted() {
        removeEventListener('resize', () => this.onResize(this.getCurrentWidthScreen()))
    }
})