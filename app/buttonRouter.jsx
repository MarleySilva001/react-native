const ButtonR = ({href, Text}) => {
    return(
        <Link href={href}>
                <Pressable>
                    <Text>{Text}</Text>
                    </Pressable>
                </Link>
    )
}

export default ButtonR