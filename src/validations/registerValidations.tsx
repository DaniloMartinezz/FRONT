export const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Email inválido';
};

export const validateCPF = (cpf: string): string => {
    const formattedValue = cpf.replace(/\D/g, '');
    if (formattedValue.length === 0) return ''; // Se o campo estiver vazio, não exibe erro
    if (formattedValue.length < 11) return 'CPF incompleto'; // Se o CPF estiver incompleto, exibe erro
    
    // Validação do CPF
    const cpfNumbers = formattedValue.substring(0, 9);
    const cpfDigits = formattedValue.substring(9);
    const cpfArray = Array.from(cpfNumbers);

    let sum = 0;
    let counter = 10;

    cpfArray.forEach(digit => {
        sum += parseInt(digit) * counter;
        counter--;
    });

    const remainder = sum % 11;
    const firstDigit = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cpfDigits[0]) !== firstDigit) return 'CPF inválido';

    sum = 0;
    counter = 11;
    cpfArray.push(firstDigit.toString());

    cpfArray.forEach(digit => {
        sum += parseInt(digit) * counter;
        counter--;
    });

    const secondRemainder = sum % 11;
    const secondDigit = secondRemainder < 2 ? 0 : 11 - secondRemainder;

    if (parseInt(cpfDigits[1]) !== secondDigit) return 'CPF inválido';

    // Aplicação da máscara de digitação
    let maskedCPF = formattedValue.substring(0, 3);
    if (formattedValue.length > 3) {
        maskedCPF += '.' + formattedValue.substring(3, 6);
        if (formattedValue.length > 6) {
            maskedCPF += '.' + formattedValue.substring(6, 9);
            if (formattedValue.length > 9) {
                maskedCPF += '-' + formattedValue.substring(9, 11);
            }
        }
    }

    return maskedCPF;
};

export const validateFullName = (fullName: string): string => {
    const fullNameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+$/;
    return fullNameRegex.test(fullName) ? '' : 'Informe nome e sobrenome';
};

export const validatePassword = (password: string): string => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password) ? '' : 'A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas e um caractere especial';
};

export const fetchAddressByCep = async (cep: string): Promise<{ street: string; city: string } | undefined> => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return { street: data.logradouro || '', city: data.localidade || '' };
    } catch (error) {
        console.error('Erro ao buscar endereço pelo CEP:', error);
        return undefined;
    }
};