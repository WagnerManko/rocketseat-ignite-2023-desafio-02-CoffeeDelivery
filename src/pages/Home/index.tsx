import { Layout } from '../../components/layout'
import { Banner } from '../../components/Banner'
import { CoffeeList } from '../../components/CoffeeList'

export function Home(){
    return (
        <Layout>
            <Banner />
            <CoffeeList />
        </Layout>
    )
}