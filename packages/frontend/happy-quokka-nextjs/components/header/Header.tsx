'use client'
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Link as MuiLink,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import Link from 'next/link'

const drawerWidth = 240

interface Section {
  title: string
  href: string
}
const SECTIONS: Section[] = [
  { title: 'Se connecter', href: '/login' },
  { title: "S'inscrire", href: '/inscription' },
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <MuiLink component={Link} href="/" variant="h6">
        Happy Quokka
      </MuiLink>
      <Divider />
      <List>
        {SECTIONS.map((section) => (
          <ListItem key={section.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component={Link}
              href={section.href}
            >
              <ListItemText primary={section.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <MuiLink
            component={Link}
            href="/"
            variant="h6"
            color="#ffffff"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Happy Quokka
          </MuiLink>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {SECTIONS.map((section) => (
              <Button
                color="inherit"
                key={section.title}
                component={Link}
                href={section.href}
                sx={{ mx: 1 }}
              >
                {section.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  )
}

export default Header
