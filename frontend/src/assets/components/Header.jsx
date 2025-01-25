import chefClaudeIcon from '/src/assets/images/chef-claude-icon.png';

export default function Header(){
    return(
        <>
            <header>
                <img src={chefClaudeIcon} alt="Chef Claude Icon"/>
                <h1>Chef Claude</h1>
            </header>
        </>
    )
}