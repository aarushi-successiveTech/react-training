import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 

const UserProfile = ({ user }) => {

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ minWidth: 300, maxWidth: 450 }}>
        <CardContent>
          
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccountCircleIcon /> {user.name}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Phone: {user.phone}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;