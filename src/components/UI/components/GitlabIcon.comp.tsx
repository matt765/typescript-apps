import {
  Flex, Link
} from '@chakra-ui/react'
import {
  headerGitlabIicon, gitlabIcon
} from './navbar/styles/Navbar.styles'
import { Github } from '@chakra-icons/bootstrap'

export const GitlabIcon = () =>
  <Flex alignItems="center" sx={gitlabIcon}>
    <Link href="https://github.com/matt765/typescript-apps" isExternal sx={headerGitlabIicon}>
      <Github/>
    </Link>
  </Flex>

