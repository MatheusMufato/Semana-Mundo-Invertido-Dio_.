import app from './data/firebase.js'

import { subscribeToHellfireClube } from './data/hellfire-club.js'

    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

    const btnSubscribe = document.getElementById('btnSubscribe')

    btnSubscribe.addEventListener('click', async () => {
        const Subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const SubscriptionId = await subscribeToHellfireClube(Subscription)
        console.log('Inscrito com Sucesso: ${SubscriptionId}')

        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''
})