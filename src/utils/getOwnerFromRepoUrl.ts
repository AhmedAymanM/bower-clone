export function getOwnerFromRepoUrl(url: string) {
  const { hostname, pathname } = new URL(url)

  if (hostname === 'github.com') {
    const owner = pathname.split('/')[1]
    return owner
  }
}
